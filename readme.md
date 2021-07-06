# Desafio Visie 1

## 1) Escreva uma função que receba uma array de inteiros e retorne a quantidade de elementos da array com valor acima da média.

Entrada: [22, 28, 33, 54, 14, 2, 76]

Saída prevista: 3

Resposta:

## 2) Escreva uma função que receba uma array de strings não vazias e retorne a quantidade de strings iniciadas pela letra "a".

Entrada: [‘front-end’, ’angular’, ’back-end’, ’database’, ’async’]

Saída prevista: 2

Resposta:

## 3) Escreva uma função que receba uma array de inteiros e retorne a soma de todos os números em índices ímpares.

Entrada: [22, 28, 33, 54, 14, 2, 76]

Saída prevista: 84

Resposta:


## 4) Escreva uma função que receba uma array de strings não vazias e retorne um novo vetor em que o primeiro letra de cada string foi substituído pela letra "a".

Entrada: [‘front-end’, ’back-end’, ’database’]

Saída prevista: [‘aront-end’, ’aack-end’, ’aatabase’]

Resposta:

## 5) Escreva uma função que receba uma string e 
- elimine os espaços em seu início e término, 

- substitua a vírgula por um ponto de exclamação,

- substitua “olá” por uma saudação (bom dia, boa tarde, boa noite) de acordo com o horário.

Entrada: ' Olá usuário, bem-vindo ao sistema  '

Saída prevista: 'Bom dia, usuário! Bem-vindo ao sistema'

Resposta:


# Informações e instruções

O horário de início considerado é o horário do recebimento do documento, combinado em entrevista.

A execução do desafio deve ser feita na linguagem mais relevante no contexto da vaga.

Escreva sua resposta em seu editor de preferência, e copie/cole a resposta logo abaixo do desafio, como o modelo abaixo:

Exemplo (javascript): escreva uma função que receba uma array de inteiros e retorne a soma de todos os números pares.

Entrada: [22, 28, 33, 54, 14, 2, 76]

Saída prevista: 3

Resposta:

arr = [22, 28, 33, 54, 14, 2, 76]

    function returnEvensSum(data){
        return data.reduce((a, v) => a += v % 2 == 0 ? v : 0)
    }
    console.log(returnEvensSum(arr))

Caso o texto venha com qualquer formatação, não há problema. Apenas certifique-se de que o bloco de código não perdeu nenhum detalhe, como indentações, por exemplo.

Ao término do teste, salve uma versão deste documento (“Arquivo > Histórico de versões > Nomear a versão atual” ou “File > Version history > Name current version”) com o nome “Desafio concluído”. O horário desta ação será considerado o momento de sua entrega.

É estimado o tempo de 1 hora para execução deste desafio, mas não há problema caso este tempo seja extrapolado.

Boa sorte!

Marcelo Hanada